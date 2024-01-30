<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


    @extends('layouts.app')

    @section('title', 'beadasok Index')

    @section('content')
    <h1>Beadasok</h1>

    @if(count($beadasok) > 0)
    <ul>
        @foreach($beadasok as $beadas)
        <li>{{ $beadas->name }} - {{ $beadas->email }}</li>
        @endforeach
    </ul>
    @else
    <p>Nincsenek Neadások.</p>
    @endif
    @endsection

</body>

</html>