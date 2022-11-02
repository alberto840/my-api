const mongoose = require('mongoose');

const CatalogScheme = new mongoose.Schema(
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

module.exports = mongoose.model("catalog" , CatalogScheme)