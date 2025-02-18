const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

// const start = () => {
//     try {
        
//     } catch (error) {
//         console.log(error)
//     }
// }

app.listen(PORT, () => console.log(`Server is running on port${PORT}`));

