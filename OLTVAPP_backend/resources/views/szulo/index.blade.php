@extends('layouts.app')

@section('title', 'Szulok Index')

@section('content')
    <h1>Szulok</h1>

    @if(count($szulok) > 0)
        <ul>
            @foreach($szulok as $szulo)
                <li>{{ $szulo->vez_nev }}, {{ $szulo->ker_nev }}, {{ $szulo->lakcim_varos }}, {{ $szulo->lakcim_irSzam }}, {{ $szulo->lakcim_utca}}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
