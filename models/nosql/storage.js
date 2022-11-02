const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
{
    url:{
        type: String
    },
    filename:{
        type: String
    }

},
{
    timestamps: true, //created at y updatedate
    versionKey: false
}
)

module.exports = mongoose.model("storage" , StorageScheme)