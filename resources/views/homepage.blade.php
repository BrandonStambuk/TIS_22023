<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/app.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/fondo.css') }}">
    <link rel="stylesheet" href="{{ asset('css/homepage.css') }}">
    <title>Inicio</title>
   
</head>
<body>
    <div id="navbar"></div>
    <div class="container" style="width: 90vw; font-size: 1em; ">
      <div class="row">
        <div class="col-md-6">
          <!-- Espacio para la imagen -->
          <img src="tu-imagen.jpg" alt="Imagen" class="img-fluid" />
        </div>   
        <div class="col-md-6">
          <!-- Texto "QUE ES LA ICPC?" -->
          <h1>Que es la ICPC?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus quis massa id quam convallis accumsan. Sed euismod nisl 
            ac dui auctor, non rhoncus justo varius. Suspendisse ut bibendum libero.
             Sed in libero non nunc blandit efficitur id nec odio. Nullam vel urna sed massa luctus blandit. In et vehicula justo. Vivamus a nulla vitae sapien vestibulum interdum. Nunc vehicula mi eu ipsum fringilla, ac condimentum nisl viverra. Duis malesuada, justo non aliquam tincidunt, eros urna cursus nisi, eu aliquet tellus elit a nulla. Sed efficitur, elit vel feugiat fermentum, nunc justo bibendum lectus, eu fermentum turpis quam eget urna. Integer eu turpis vitae arcu cursus tristique eget ac dui. In eu odio et justo tincidunt condimentum. Sed hendrerit scelerisque odio, vel bibendum urna.
          </p>
        </div>
      </div>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>