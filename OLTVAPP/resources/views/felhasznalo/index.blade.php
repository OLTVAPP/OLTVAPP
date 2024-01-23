@extends('layouts.app')

@section('title', 'Felhasznalok Index')

@section('content')
    <h1>Felhasználók</h1>

    @if(count($felhasznalok) > 0)
        <ul>
            @foreach($felhasznalok as $felhasznalo)
                <li>{{ $felhasznalo->felhasznalo_nev }}, {{ $felhasznalo->szerepkor }}, {{ $felhasznalo->felhasznalo_email }},</li>
            @endforeach
        </ul>
    @else
        <p>Nincsenek felhasználók.</p>
    @endif
@endsection
