<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


    @extends('layouts.app')

    @section('title', 'Admins Index')

    @section('content')
    <h1>Admins</h1>

    @if(count($admins) > 0)
    <ul>
        @foreach($admins as $admin)
        <li>{{ $admin->name }} - {{ $admin->email }}</li>
        @endforeach
    </ul>
    @else
    <p>Nincsenek adminok.</p>
    @endif
    @endsection

</body>

</html>