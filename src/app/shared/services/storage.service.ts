import { Injectable } from '@angular/core';
import { NewPostModel } from '../models/new-post.model';
import { SignIn } from '../models/sign-in.models';
import { Login } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers(): SignIn[] {
    let usersStorage: SignIn[] = [];
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
    }
    return usersStorage;
  }

  saveNewUser(user: SignIn) {

    let totalUsers: string;
    let usersStorage: SignIn[] = [];
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
    }
    usersStorage.push(user);
    totalUsers = JSON.stringify(usersStorage)
    localStorage.setItem('users', totalUsers);

  }

  saveEditUser(user: SignIn) {

    let totalUsers: string;
    let usersStorage: SignIn[] = [];
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
    }


    for (let i = 0; i < usersStorage.length; i++) {
      const item = usersStorage[i];
      if (item.email.toLowerCase() === user.email.toLowerCase()) {
        usersStorage[i] = user;
      }

    }

    totalUsers = JSON.stringify(usersStorage)
    localStorage.setItem('users', totalUsers);

  }

  getUser(): SignIn {
    let usersStorage: SignIn[] = [];
    let userStorage: SignIn = new SignIn();
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
      let login: Login = JSON.parse(localStorage.getItem('login'));
      for (const item of usersStorage) {
        if (item.email === login.email) {
          userStorage = item;
        }
      }

    }

    return userStorage;
  }


  savePost(post: NewPostModel) {

    let totalPost: string;
    let postStorage: NewPostModel[] = [];
    if (JSON.parse(localStorage.getItem('posts'))) {
      postStorage = JSON.parse(localStorage.getItem('posts'));
    }
    postStorage.push(post);
    totalPost = JSON.stringify(postStorage);
    localStorage.setItem('posts', totalPost);

  }
  searchId(): number {

    let id: number = 0;
    let postStorage: NewPostModel[] = [];
    if (JSON.parse(localStorage.getItem('posts'))) {
      postStorage = JSON.parse(localStorage.getItem('posts'));


      let block = true;
      while (block) {
        block = false;
        for (const item of postStorage) {
          if (item.id >= id) {
            id++;
            block = true;
          }

        }

      }


    }
    return id;
  }

  getPost(id: number): NewPostModel {

    let postsStorage: NewPostModel[] = [];
    let postStorage: NewPostModel;
    if (JSON.parse(localStorage.getItem('posts'))) {
      postsStorage = JSON.parse(localStorage.getItem('posts'));

      for (const post of postsStorage) {

        if (post.id === id) {
          postStorage = post;
        }
      }
    } else {
      return null;
    }

    return postStorage;

  }

  getPosts(): NewPostModel[] {

    let postsStorage: NewPostModel[] = [];
    if (JSON.parse(localStorage.getItem('posts'))) {
      postsStorage = JSON.parse(localStorage.getItem('posts'));
    } else {
      return null;
    }

    return postsStorage;

  }



  fillData() {

    try {
      if (!localStorage.getItem('posts')) {
        
        let post: NewPostModel = new NewPostModel();

        post.title = 'La aventura sigue tras terminar Pokémon: Let’s Go, Pikachu! y Pokémon: Let’s Go, Eevee!';
        post.date = `Mon Nov 0${this.randomNumber()} 2020 0${this.randomNumber()}:52:46 GMT+0100 (hora estándar de Europa central)`;
        post.tags = ['articuno', 'moltres', 'zapdos'];
        post.subtitle = '¡Los Pokémon legendarios llegan volando!';
        post.urlImage = 'https://i.pinimg.com/originals/a8/a4/56/a8a4561433ee9fd5e4aef69e930bff79.gif';
        post.textImage = 'Mega Charizard X planeando';
        post.description = `Puedes encontrar a tres de los cuatro Pokémon legendarios que aparecen en Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee! (Articuno, Zapdos y Moltres) antes de convertirte en Campeón de la Liga Pokémon. ¡Te tocará decidir si quieres ir a por ellos antes o después de enfrentarte al Alto Mando! A diferencia de la mayoría de encuentros con Pokémon salvajes en este juego, tendrás que combatir contra ellos y derrotarlos antes de intentar capturarlos. Esperar un poco antes de lanzarse a conquistar tal hazaña te permitirá subir de nivel a tus Pokémon y hará que el combate contra ellos sea más fácil. Sin embargo, si consigues capturarlos antes de llegar a la Meseta Añil, podrás usarlos contra el Alto Mando.
        Articuno se esconde en lo más profundo de las Islas Espuma, que se encuentran al sur de Kanto en la Ruta 20. Este Pokémon de tipo Hielo y Volador es muy débil contra los ataques de tipo Roca y también, aunque algo menos, a los de tipo Fuego, Eléctrico y Acero.
        Zapdos se encuentra en la Central de Energía, a la cual solo se puede acceder usando la Técnica Secreta Surcaaguas en la Ruta 10, al nordeste del mapa. Al ser de tipo Eléctrico y Volador, los ataques de tipo Roca y Hielo resultan muy eficaces contra él. Los Pokémon de tipo Tierra son inmunes a sus ataques de tipo Eléctrico, pero, al mismo tiempo, Zapdos tampoco se ve afectado por los movimientos de ese tipo.`;
        post.author = 'Antonio Olvera Fernández, Full stack developer, 25'
        post.authorImage = 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ec/latest/20200308144021/Mew_EpEc.gif/180px-Mew_EpEc.gif'
        post.id = 0;
        this.savePost(post);
        post = new NewPostModel();
    

        post.title = 'This Is Fine. No, Really.';
        post.date = `Mon Nov 0${this.randomNumber()} 2020 0${this.randomNumber()}:52:46 GMT+0100 (hora estándar de Europa central)`;
        post.tags = ['President', 'danger', 'tricks'];
        post.subtitle = 'I just voted in the least important election of my lifetime';
        post.urlImage = 'https://miro.medium.com/max/1000/1*xSrN_hk7rXRyrUaNKfIEvg.jpeg';
        post.textImage = '(Win McNamee/Getty)';
        post.description = `Ihave struggled to explain to other people why, perversely, I have become more politically conservative during the reign of Donald Trump. This despite having pretty deep left-wing convictions and never having been anything other than disgusted by Trump himself. I have struggled to explain this to other people, but not to myself. It is perfectly obvious to me.
        “Conservatives” is a word that captures a bunch of different things. For a lot of left-liberals, my former self and some part of my current self included, it just means the enemy. They are monstrous bigoted backwards sewer people who stand between the status quo and all the good things we can’t accomplish because of their stubborn or wrongheaded or evil or superstitious or selfish commitments.
        That’s not how they’d say it, or it’s not always how they’d say it, but that’s the theory of the case. It’s the explanation held by left-liberals about why we don’t “just recognize healthcare as a human right” or “just stop the existential threat of climate change” and so on. A coalition of deluded and devilish people refuse to face reality, listen to The Science, relinquish outmoded moral concerns, adopt the updated moral consensus, or see things in the long-term.
        A crotchety old Kurt Vonnegut cracked that “we could have saved the earth, but we were too damned cheap.” (He means, of course, that they are too damned cheap.) This is how simple it is. The problem is conservatives, and the answer is defeating them. Or there’s James Joyce, who wrote that “History is a nightmare from which I am trying to awake.” This is the progressive orientation to the past. Institutions should be able to be broken up easily so new ones can be formed and reformed. We’re about to get it right … next time.`;
        post.author = 'Antonio Olvera Fernández, Full stack developer, 25'
        post.authorImage = 'assets/images/Foto-Carnet.png'
        post.id = 1;
        
        this.savePost(post);
        post = new NewPostModel();
        post.title = '20 Things Most People Learn Too Late In Life';
        post.date = `Mon Nov 0${this.randomNumber()} 2020 0${this.randomNumber()}:52:46 GMT+0100 (hora estándar de Europa central)`;
        post.tags = ['dream', 'friends', 'potential'];
        post.subtitle = 'But always, life is a movement forward.';
        post.urlImage = 'https://miro.medium.com/max/700/1*BO36vszZiTsOZl0EU6lwLA.jpeg';
        post.textImage = 'Nicolas Cole Instagram';
        post.description = `No matter where you are on the journey, in some way, you are continuing on — and that’s what makes it so magnificent. One day, you’re questioning what on earth will ever make you feel happy and fulfilled. And the next, you’re perfectly in flow, writing the most important book of your entire career.
        What nobody ever tells you, though, when you are a wide-eyed child, are all the little things that come along with “growing up.”
        1. Most people are scared of using their imagination.
        They’ve disconnected with their inner child.
        They don’t feel they are “creative.”
        They like things “just the way they are.”
        2. Your dream doesn’t really matter to anyone else.
        Some people might take interest. Some may support you in your quest. But at the end of the day, nobody cares, or will ever care about your dream as much as you.
        3. Friends are relative to where you are in your life.
        Most friends only stay for a period of time — usually in reference to your current interest. But when you move on, or your priorities change, so too do the majority of your friends.
        4. Your potential increases with age.
        As people get older, they tend to think that they can do less and less — when in reality, they should be able to do more and more, because they have had time to soak up more knowledge. Being great at something is a daily habit. You aren’t just “born” that way.
        5. Spontaneity is the sister of creativity.
        If all you do is follow the exact same routine every day, you will never leave yourself open to moments of sudden discovery. Do you remember how spontaneous you were as a child? Anything could happen, at any moment!
        6. You forget the value of “touch” later on.
        When was the last time you played in the rain?
        When was the last time you sat on a sidewalk and looked closely at the cracks, the rocks, the dirt, the one weed growing between the concrete and the grass nearby.
        Do that again.
        You will feel so connected to the playfulness of life.`;
        post.author = 'Antonio Olvera Fernández, Full stack developer, 25'
        post.authorImage = 'assets/images/Foto-Carnet.png'
        post.id = 2;
        this.savePost(post);
        


      
      }
      
    } catch (error) {
      
    }








  }

  randomNumber():number{
    let num = Math.random()*10;
    num = Math.round(num);
    return num;
  }


}




// post.title = 
// post.date = 
// post.tags = 
// post.subtitle = 
// post.urlImage = 
// post.textImage = 
// post.description = 
// post.author =  
// post.authorImage = 
// post.id = 