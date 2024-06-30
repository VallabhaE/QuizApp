const express = require("express");
const app = express();
app.use(express.json());

var data = [];  // This variable stores your question data
var unq = 0;

app.get("/check",(req,res)=>{
    res.json(unq)
})
app.get("/api", (req, res) => {
    res.json(data);  // Responds with the current data array
});

app.post('/create-question', (req, res) => {
    const { question, option1, option2, option3, option4,roomId,ans } = req.body;

    if (!question || !option1 || !option2 || !option3 || !option4 || !roomId || !ans) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Here was the mistake: you used 'datas' instead of 'data'
    
    data.push({ question, option1, option2, option3, option4,roomId,ans});

    res.status(201).json({
        message: 'Question created successfully',
        data: {
            question,
            options: [option1, option2, option3, option4]
        }
    });
});

app.listen(5000, () => {
    console.log("Server Started At Port 5000");
});
