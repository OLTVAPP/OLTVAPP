@extends('layouts.app')

@section('title', 'Forgalmazok Index')

@section('content')
    <h1>Forgalmazók</h1>

    @if(count($forgalmazok) > 0)
        <ul>
            @foreach($forgalmazok as $forgalmazo)
                <li>{{ $forgalmazo->forgalmazo_neve }}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
