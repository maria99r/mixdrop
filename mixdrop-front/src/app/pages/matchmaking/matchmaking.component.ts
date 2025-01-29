<app-navbar></app-navbar>

<div class="cabecera">
    <img [src]="IMG_URL + user?.avatarPath" alt="avatar de usuario">
    <span style="font-size: 2rem;">{{user?.nickname}}</span> <!-- nickname del usuario-->
</div>

<!--mostrar tamb avatar de invitado / anfitrion-->

<p>si es anitrion</p>
<button (click)="gameWithBot()">Jugar contra un bot</button>
<button (click)="gameRandom()">Jugar con oponente aleatorio</button>

<!-- q te abra ventana model con amigos conectados ? -->
<p>Invitar amigo a jugar</p>
<div class="listaUsuarios"></div>
@if (conenctedFriends.length < 1) { <span> No hay amigos conectados </span>
    } @else {
    @for (friend of conenctedFriends; track $index) {


        <div class="tarjetaUsuario">
            <div class="contenedorAvatar">
                <img class="avatar" [src]="IMG_URL + friend.avatarPath" alt="usuario avatar" width="50px">
            </div>
    
            <span class="nickname">
                {{ friend.nickname }}
            </span>

            <div class="contenedorIcono">
                <img class="icono" (click)="gameWithFriend(friend)" src="/images/addFriend.webp"
                    alt="invitar a jugar a amigo">
            </div>

        </div>

        <span class="nickname">
            {{ friend.nickname }}
        </span>

        <div class="contenedorIcono">
            <img class="icono" (click)="gameWithFriend(friend)" src="/images/battle.png" alt="invitar a jugar a amigo">
        </div>
    </div>
    }
    }

    <hr>
    <p>si es invitado esta esperando a q empiece el juego</p>