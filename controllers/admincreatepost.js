const AdminPost = require('../models/AdminPost')
const path = require('path')


module.exports = async (req,res)=>{

    if(req.files.image1){
      var img1 = req.files.image1[0].filename
    }

    if(req.files.image2) {
        var img2 = req.files.image2[0].filename
    }

    if(req.files.image3) {
        var img3 = req.files.image3[0].filename
    }

    if(req.files.image4) {
        var img4 = req.files.image4[0].filename
    }

    if(req.files.image5) {
        var img5 = req.files.image5[0].filename
    }

    if(req.files.image6) {
        var img6 = req.files.image6[0].filename
    }

    if(req.files.image7) {
        var img7 = req.files.image7[0].filename
    }

    if(req.files.image8) {
        var img8 = req.files.image8[0].filename
    }

    if(req.files.image9) {
        var img9 = req.files.image9[0].filename
    }

    if(req.files.image10) {
        var img10 = req.files.image10[0].filename
    }

    await AdminPost.create({
        
    description: req.body.description,
    keywords: req.body.keywords,
    overview: req.body.overview,
    posttitle: req.body.posttitle,
    title: req.body.title,
    para1: req.body.para1,
    linkurl1: req.body.linkurl1,
    linktext1: req.body.linktext1,
    image1: img1,
    htmlcode1: req.body.htmlcode1,
    csscode1: req.body.csscode1,
    javascriptcode1: req.body.javascriptcode1,
    reactcode1: req.body.reactcode1,

    para2: req.body.para2,
    linkurl2: req.body.linkurl2,
    linktext2: req.body.linktext2,
    image2: img2,
    htmlcode2: req.body.htmlcode2,
    csscode2: req.body.csscode2,
    javascriptcode2: req.body.javascriptcode2,
    reactcode2: req.body.reactcode2,
    
    para3: req.body.para3,
    linkurl3: req.body.linkurl3,
    linktext3: req.body.linktext3,
    image3: img3,
    htmlcode3: req.body.htmlcode3,
    csscode3: req.body.csscode3,
    javascriptcode3: req.body.javascriptcode3,
    reactcode3: req.body.reactcode3,
    
    para4: req.body.para4,
    linkurl4: req.body.linkurl4,
    linktext4: req.body.linktext4,
    image4: img4,
    htmlcode4: req.body.htmlcode4,
    csscode4: req.body.csscode4,
    javascriptcode4: req.body.javascriptcode4,
    reactcode4: req.body.reactcode4,
    
    para5: req.body.para5,
    linkurl5: req.body.linkurl5,
    linktext5: req.body.linktext5,
    image5: img5,
    htmlcode5: req.body.htmlcode5,
    csscode5: req.body.csscode5,
    javascriptcode5: req.body.javascriptcode5,
    reactcode5: req.body.reactcode5,
    
    para6: req.body.para6,
    linkurl6: req.body.linkurl6,
    linktext6: req.body.linktext6,
    image6: img6,
    htmlcode6: req.body.htmlcode6,
    csscode6: req.body.csscode6,
    javascriptcode6: req.body.javascriptcode6,
    reactcode6: req.body.reactcode6,
    
    para7: req.body.para7,
    linkurl7: req.body.linkurl7,
    linktext7: req.body.linktext7,
    image7: img7,
    htmlcode7: req.body.htmlcode7,
    csscode7: req.body.csscode7,
    javascriptcode7: req.body.javascriptcode7,
    reactcode7: req.body.reactcode7,
    
    para8: req.body.para8,
    linkurl8: req.body.linkurl8,
    linktext8: req.body.linktext8,
    image8: img8,
    htmlcode8: req.body.htmlcode8,
    csscode8: req.body.csscode8,
    javascriptcode8: req.body.javascriptcode8,
    reactcode8: req.body.reactcode8,
    
    para9: req.body.para9,
    linkurl9: req.body.linkurl9,
    linktext9: req.body.linktext9,
    image9: img9,
    htmlcode9: req.body.htmlcode9,
    csscode9: req.body.csscode9,
    javascriptcode9: req.body.javascriptcode9,
    reactcode9: req.body.reactcode9,
    
    para10: req.body.para10,
    linkurl10: req.body.linkurl10,
    linktext10: req.body.linktext10,
    image10: img10,
    htmlcode10: req.body.htmlcode10,
    csscode10: req.body.csscode10,
    javascriptcode10: req.body.javascriptcode10,
    reactcode10: req.body.reactcode10,

    
    })
    
    
    await AdminPost.updateMany({para1:''},{$unset:{para1: 1}})
    await AdminPost.updateMany({linkurl1:''},{$unset:{linkurl1: 1}})
    await AdminPost.updateMany({linktext1:''},{$unset:{linktext1: 1}})
    await AdminPost.updateMany({image1:''},{$unset:{image1: 1}})
    await AdminPost.updateMany({htmlcode1:''},{$unset:{htmlcode1: 1}})
    await AdminPost.updateMany({csscode1:''},{$unset:{csscode1: 1}})
    await AdminPost.updateMany({javascriptcode1:''},{$unset:{javascriptcode1: 1}})
    await AdminPost.updateMany({reactcode1:''},{$unset:{reactcode1: 1}})
    
    await AdminPost.updateMany({para2:''},{$unset:{para2: 1}})
    await AdminPost.updateMany({linkurl2:''},{$unset:{linkurl2: 1}})
    await AdminPost.updateMany({linktext2:''},{$unset:{linktext2: 1}})
    await AdminPost.updateMany({image2:''},{$unset:{image2: 1}})
    await AdminPost.updateMany({htmlcode2:''},{$unset:{htmlcode2: 1}})
    await AdminPost.updateMany({csscode2:''},{$unset:{csscode2: 1}})
    await AdminPost.updateMany({javascriptcode2:''},{$unset:{javascriptcode2: 1}})
    await AdminPost.updateMany({reactcode2:''},{$unset:{reactcode2: 1}})
    
    await AdminPost.updateMany({para3:''},{$unset:{para3: 1}})
    await AdminPost.updateMany({linkurl3:''},{$unset:{linkurl3: 1}})
    await AdminPost.updateMany({linktext3:''},{$unset:{linktext3: 1}})
    await AdminPost.updateMany({image3:''},{$unset:{image3: 1}})
    await AdminPost.updateMany({htmlcode3:''},{$unset:{htmlcode3: 1}})
    await AdminPost.updateMany({csscode3:''},{$unset:{csscode3: 1}})
    await AdminPost.updateMany({javascriptcode3:''},{$unset:{javascriptcode3: 1}})
    await AdminPost.updateMany({reactcode3:''},{$unset:{reactcode3: 1}})
    
    await AdminPost.updateMany({para4:''},{$unset:{para4: 1}})
    await AdminPost.updateMany({linkurl4:''},{$unset:{linkurl4: 1}})
    await AdminPost.updateMany({linktext4:''},{$unset:{linktext4: 1}})
    await AdminPost.updateMany({image4:''},{$unset:{image4: 1}})
    await AdminPost.updateMany({htmlcode4:''},{$unset:{htmlcode4: 1}})
    await AdminPost.updateMany({csscode4:''},{$unset:{csscode4: 1}})
    await AdminPost.updateMany({javascriptcode4:''},{$unset:{javascriptcode4: 1}})
    await AdminPost.updateMany({reactcode4:''},{$unset:{reactcode4: 1}})
    
    await AdminPost.updateMany({para5:''},{$unset:{para5: 1}})
    await AdminPost.updateMany({linkurl5:''},{$unset:{linkurl5: 1}})
    await AdminPost.updateMany({linktext5:''},{$unset:{linktext5: 1}})
    await AdminPost.updateMany({image5:''},{$unset:{image5: 1}})
    await AdminPost.updateMany({htmlcode5:''},{$unset:{htmlcode5: 1}})
    await AdminPost.updateMany({csscode5:''},{$unset:{csscode5: 1}})
    await AdminPost.updateMany({javascriptcode5:''},{$unset:{javascriptcode5: 1}})
    await AdminPost.updateMany({reactcode5:''},{$unset:{reactcode5: 1}})
    
    await AdminPost.updateMany({para6:''},{$unset:{para6: 1}})
    await AdminPost.updateMany({linkurl6:''},{$unset:{linkurl6: 1}})
    await AdminPost.updateMany({linktext6:''},{$unset:{linktext6: 1}})
    await AdminPost.updateMany({image6:''},{$unset:{image6: 1}})
    await AdminPost.updateMany({htmlcode6:''},{$unset:{htmlcode6: 1}})
    await AdminPost.updateMany({csscode6:''},{$unset:{csscode6: 1}})
    await AdminPost.updateMany({javascriptcode6:''},{$unset:{javascriptcode6: 1}})
    await AdminPost.updateMany({reactcode6:''},{$unset:{reactcode6: 1}})
    
    await AdminPost.updateMany({para7:''},{$unset:{para7: 1}})
    await AdminPost.updateMany({linkurl7:''},{$unset:{linkurl7: 1}})
    await AdminPost.updateMany({linktext7:''},{$unset:{linktext7: 1}})
    await AdminPost.updateMany({image7:''},{$unset:{image7: 1}})
    await AdminPost.updateMany({htmlcode7:''},{$unset:{htmlcode7: 1}})
    await AdminPost.updateMany({csscode7:''},{$unset:{csscode7: 1}})
    await AdminPost.updateMany({javascriptcode7:''},{$unset:{javascriptcode7: 1}})
    await AdminPost.updateMany({reactcode7:''},{$unset:{reactcode7: 1}})
    
    await AdminPost.updateMany({para8:''},{$unset:{para8: 1}})
    await AdminPost.updateMany({linkurl8:''},{$unset:{linkurl8: 1}})
    await AdminPost.updateMany({linktext8:''},{$unset:{linktext8: 1}})
    await AdminPost.updateMany({image8:''},{$unset:{image8: 1}})
    await AdminPost.updateMany({htmlcode8:''},{$unset:{htmlcode8: 1}})
    await AdminPost.updateMany({csscode8:''},{$unset:{csscode8: 1}})
    await AdminPost.updateMany({javascriptcode8:''},{$unset:{javascriptcode8: 1}})
    await AdminPost.updateMany({reactcode8:''},{$unset:{reactcode8: 1}})
    
    await AdminPost.updateMany({para9:''},{$unset:{para9: 1}})
    await AdminPost.updateMany({linkurl9:''},{$unset:{linkurl9: 1}})
    await AdminPost.updateMany({linktext9:''},{$unset:{linktext9: 1}})
    await AdminPost.updateMany({image9:''},{$unset:{image9: 1}})
    await AdminPost.updateMany({htmlcode9:''},{$unset:{htmlcode9: 1}})
    await AdminPost.updateMany({csscode9:''},{$unset:{csscode9: 1}})
    await AdminPost.updateMany({javascriptcode9:''},{$unset:{javascriptcode9: 1}})
    await AdminPost.updateMany({reactcode9:''},{$unset:{reactcode9: 1}})
    
    await AdminPost.updateMany({para10:''},{$unset:{para10: 1}})
    await AdminPost.updateMany({linkurl10:''},{$unset:{linkurl10: 1}})
    await AdminPost.updateMany({linktext10:''},{$unset:{linktext10: 1}})
    await AdminPost.updateMany({image10:''},{$unset:{image10: 1}})
    await AdminPost.updateMany({htmlcode10:''},{$unset:{htmlcode10: 1}})
    await AdminPost.updateMany({csscode10:''},{$unset:{csscode10: 1}})
    await AdminPost.updateMany({javascriptcode10:''},{$unset:{javascriptcode10: 1}})
    await AdminPost.updateMany({reactcode10:''},{$unset:{reactcode10: 1}})


     res.redirect('/');
   
    }