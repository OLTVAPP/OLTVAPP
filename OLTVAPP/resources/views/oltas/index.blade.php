@extends('layouts.app')

@section('title', 'Oltasok Index')

@section('content')
    <h1>Oltások</h1>

    @if(count($oltasok) > 0)
        <ul>
            @foreach($oltasok as $oltas)
                <li>{{ $oltas->tipus_elnev }}, {{ $oltas->kotelezo }}, {{ $oltas->beadando }}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
