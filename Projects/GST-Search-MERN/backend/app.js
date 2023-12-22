import express from "express";
import cors from "cors";
import { GST } from "./gst.model.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const validateGstNumber = (num) => {
    let gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
    let busniessNameRegex = /^(?:[A-Za-z]+\s){2}[A-Za-z]+/

    if(num)
    if (gstRegex.test(num)) {
        return true
    } else {
        if(busniessNameRegex.test(num))
            return true
        else
            return false
    }
}

// app.post("/create", async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         console.log(req.body);
        
//         const newGst = await GST.create(req.body);

//         res.status(200).json({
//             msg: `GST created `,
//             newGst
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

app.get('/search', async (req, res, next) => {
    try {
        if (!req.query.gst) {
            return res.status(200).json({
                message: "Please enter a valid GST number"
            })
        }

        const searchText = req.query.gst;

        const isGst = validateGstNumber(searchText)

        if(!isGst){
            return res.status(200).json({
                message: "Invalid GST number"
            })
        }

        const response = await GST.find({
            $or: [{gst_number: searchText}, {busniess_name: searchText}]
        })

        if(!response){
            res.status(404).json({
                msg: "No data found",
                response
            })
        }

        res.status(200).json({
            data: response
        })
    } catch (error) {
        res.status(404).json({
            msg: "No data found",
            error
        })
    }

})

export default app;