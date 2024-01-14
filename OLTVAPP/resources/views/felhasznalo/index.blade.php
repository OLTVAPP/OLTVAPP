<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


    @extends('layouts.app')

    @section('title', 'felhasznalok Index')

    @section('content')
    <h1>Felhasználók</h1>

    @if(count($felhasznalok) > 0)
    <ul>
        @foreach($felhasznalok as $felhasznalo)
        <li>{{ $felhasznalo->name }} - {{ $felhasznalo->email }}</li>
        @endforeach
    </ul>
    @else
    <p>Nincsenek adminok.</p>
    @endif
    @endsection

</body>

</html>