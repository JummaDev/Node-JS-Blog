const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AdminPostSchema = new Schema({
    description: String,
    keywords: String,
    overview: String,
    posttitle: String,
    title: String,
    para1: String,
    linkurl1: String,
    linktext1: String,
    image1: String,
    htmlcode1: String,
    csscode1: String,
    javascriptcode1: String,
    reactcode1: String,

    para2: String,
    linkurl2: String,
    linktext2: String,
    image2: String,
    htmlcode2: String,
    csscode2: String,
    javascriptcode2: String,
    reactcode2: String,

    para3: String,
    linkurl3: String,
    linktext3: String,
    image3: String,
    htmlcode3: String,
    csscode3: String,
    javascriptcode3: String,
    reactcode3: String,

    para4: String,
    linkurl4: String,
    linktext4: String,
    image4: String,
    htmlcode4: String,
    csscode4: String,
    javascriptcode4: String,
    reactcode4: String,

    para5: String,
    linkurl5: String,
    linktext5: String,
    image5: String,
    htmlcode5: String,
    csscode5: String,
    javascriptcode5: String,
    reactcode5: String,

    para6: String,
    linkurl6: String,
    linktext6: String,
    image6: String,
    htmlcode6: String,
    csscode6: String,
    javascriptcode6: String,
    reactcode6: String,

    para7: String,
    linkurl7: String,
    linktext7: String,
    image7: String,
    htmlcode7: String,
    csscode7: String,
    javascriptcode7: String,
    reactcode7: String,

    para8: String,
    linkurl8: String,
    linktext8: String,
    image8: String,
    htmlcode8: String,
    csscode8: String,
    javascriptcode8: String,
    reactcode8: String,

    para9: String,
    linkurl9: String,
    linktext9: String,
    image9: String,
    htmlcode9: String,
    csscode9: String,
    javascriptcode9: String,
    reactcode9: String,

    para10: String,
    linkurl10: String,
    linktext10: String,
    image10: String,
    htmlcode10: String,
    csscode10: String,
    javascriptcode10: String,
    reactcode10: String,

    datePosted:{ /* can declare property type with an object like this because we need 'default' */
type: Date,
default: new Date()
    },
    comments: [{}]
});


const AdminPost = mongoose.model('AdminPost',AdminPostSchema);

module.exports = AdminPost