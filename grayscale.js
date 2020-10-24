var imageng;

function uploadi(){
  var cane = document.getElementById("can");
  var filei = document.getElementById("finput");
  var image = new SimpleImage(filei);
  imageng = image;
  image.drawTo(cane);
}

function makegray(){
    var x = imageng;
    for (var pixel of x.values()){
    var gray = (pixel.getBlue()+pixel.getRed()+pixel.getGreen())/3;
    var x = pixel.getX();
    var y = pixel.getY();
    
    pixel.setBlue(gray);
    pixel.setRed(gray);
    pixel.setGreen(gray);
                    }
  var cani = document.getElementById("can2");
  imageng.drawTo(cani);
  
}