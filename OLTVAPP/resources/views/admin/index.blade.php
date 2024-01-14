@extends('layouts.app')

@section('title', 'Admins Index')

@section('content')
    <h1>Adminok</h1>

    @if(count($admins) > 0)
        <ul>
            @foreach($admins as $admin)
                <li>{{ $admin->vez_nev }} - {{ $admin->ker_nev }}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek adminok.</p>
    @endif
@endsection
