@extends('layouts.app')

@section('title', 'Orvosok Index')

@section('content')
    <h1>Orvosok</h1>

    @if(count($orvosok) > 0)
        <ul>
            @foreach($orvosok as $orvos)
                <li>{{ $orvos->vez_nev }}, {{ $orvos->ker_nev }}, {{ $orvos->tel_szam }}, {{ $orvos->publikus_email }}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
