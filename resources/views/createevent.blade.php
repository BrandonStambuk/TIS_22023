<!-- <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/fondo.css') }}">
    <title>Crear Evento</title>
</head>
<body>

    <div id="navbar"></div>
    <div id="createEvent"></div>
    
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html> -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset('css/fondo.css')}}">
    <title>Crear Evento</title>
</head>
<body>
    <div id="navbar"></div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div id="createEvent"></div>
                            </div>
                            <div class="col-md-6">
                                <div id="descripcion"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>


