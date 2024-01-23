@extends('layouts.app')

@section('title', 'Gyerekek Index')

@section('content')
    <h1>Gyerekek</h1>

    @if(count($gyerekek) > 0)
        <ul>
            @foreach($gyerekek as $gyerek)
                <li>{{ $gyerek->vez_nev }}, {{ $gyerek->ker_nev }}, {{ $gyerek->vez_nev }}, {{ $gyerek->lakcim_varos }}, {{ $gyerek->lakcim_irSzam }}, {{ $gyerek->lakcim_utca }}</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
