import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { chooseState, saveInterestState } from 'src/states/choose.state';
import * as chooseActions from 'src/actions/choose.action';
import { Observable, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
export interface choice {
  id: string;
  name: string;
  picture: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("dialog", { static: true }) dialog: any;

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

  topics: Array<choice[]> = [
    //Row 1
    [
      {
        id: 'topic1',
        name: '#Anime',
        picture: '/assets/topics/anime.jpg',
      },
      {
        id: 'topic2',
        name: '#Illustrations',
        picture: '/assets/topics/illustrations.jpg',
      },
      {
        id: 'topic3',
        name: '#Drawing Techniques',
        picture: '/assets/topics/Drawing.jpg',
      },
      {
        id: 'topic4',
        name: '#Woodworking',
        picture: '/assets/topics/wood.jpg',
      },
      {
        id: 'topic5',
        name: '#Nude',
        picture: '/assets/topics/body.jpg',
      },
    ],

    //Row 2
    [
      {
        id: 'topic6',
        name: '#Cats',
        picture: '/assets/topics/cat.jpg',
      },
      {
        id: 'topic7',
        name: '#Dogs',
        picture: '/assets/topics/dog.jpg',
      },
      {
        id: 'topic8',
        name: '#Cute Animals',
        picture: '/assets/topics/cute-animals.jpg',
      },
      {
        id: 'topic9',
        name: '#Pets',
        picture: '/assets/topics/pets.jpg',
      },
      {
        id: 'topic10',
        name: '#Birds',
        picture: '/assets/topics/bird.jpg',
      },
    ],

    //Row 3
    [
      {
        id: 'topic11',
        name: '#Phone Accessories',
        picture: '/assets/topics/Phukien.jpg',
      },
      {
        id: 'topic12',
        name: '#iPhone',
        picture: '/assets/topics/iPhone.jpg',
      },
      {
        id: 'topic13',
        name: '#Samsung Galaxy',
        picture: '/assets/topics/samsung.jpg',
      },
      {
        id: 'topic14',
        name: '#Galaxy',
        picture: '/assets/topics/galaxy.jpg',
      },
      {
        id: 'topic15',
        name: '#Wallpaper',
        picture: '/assets/topics/wallpaper.jpg',
      },
    ],

    //Row 4
    [
      {
        id: 'topic16',
        name: '#Furry',
        picture: '/assets/topics/furry.jpg',
      },
      {
        id: 'topic17',
        name: '#Character',
        picture: '/assets/topics/char.jpg',
      },
      {
        id: 'topic18',
        name: '#My Liitle Pony',
        picture: '/assets/topics/mlp.jpg',
      },
      {
        id: 'topic19',
        name: '#Cartoon',
        picture: '/assets/topics/cartoon.jpg',
      },
      {
        id: 'topic20',
        name: '#Fursuit',
        picture: '/assets/topics/fursuit.jpg',
      },
    ],

    //Row 5
    [
      {
        id: 'topic21',
        name: '#Cars',
        picture: '/assets/topics/car.jpg',
      },
      {
        id: 'topic22',
        name: '#Motorcycles',
        picture: '/assets/topics/motor.jpg',
      },
      {
        id: 'topic23',
        name: '#Foods',
        picture: '/assets/topics/food.jpg',
      },
      {
        id: 'topic24',
        name: '#Drinks',
        picture: '/assets/topics/drinks.jpg',
      },
      {
        id: 'topic25',
        name: '#Bar',
        picture: '/assets/topics/bar.jpg',
      },
    ],

    //Row 6
    [
      {
        id: 'topic26',
        name: '#Comics',
        picture: '/assets/topics/comics.jpg',
      },
      {
        id: 'topic27',
        name: '#Travel',
        picture: '/assets/topics/travel.jpg',
      },
      {
        id: 'topic28',
        name: '#Sports',
        picture: '/assets/topics/sports.jpg',
      },
      {
        id: 'topic29',
        name: '#Football',
        picture: '/assets/topics/football.jpg',
      },
      {
        id: 'topic30',
        name: '#Basketball',
        picture: '/assets/topics/basketball.jpg',
      },
    ],
  ];

  public chooseState$: Observable<saveInterestState>;
  constructor(
    private store: Store<{ choose: chooseState, saveInterestsReducer: saveInterestState }>,
    private ele: ElementRef,
    private dialogService: NbDialogService,
    private AuthService: AuthService,
    private UserService: UserService,
  ) {
    this.chooseState$ = this.store.select(state => state.saveInterestsReducer);
  }

  ngOnInit(): void {
    this.AuthService.user$.subscribe((user: any) => {
      if (!user.email) return;
      this.UserService.getProfile(user.email).subscribe((profile: any) => {
        if (profile.interests === undefined || !profile.interests) return;
        if (profile.interests.length === 0) {
          this.open(this.dialog);
        }
      });
    });
    this.chooseState$.subscribe((state) => {
      if (state.isSuccess) {
        // this.dialogRef.close();
        window.location.href = "/home";
      }
    }
    );
  }
  step$ = this.store.select('choose', 'step');
  chose$ = this.store.select('choose', 'chose');

  addTopic(choice: choice) {
    let topic = document.getElementById(choice.id) as HTMLElement;
    let step = 0;
    this.step$.pipe(take(1)).subscribe((s) => (step = s));

    if (!topic.classList.contains('active')) {
      if (step > 6 || step < 0) return;
      topic.classList.add('active');
      this.store.dispatch(chooseActions.addTopic({ choice: choice.name }));
    } else {
      topic.classList.remove('active');
      this.store.dispatch(chooseActions.removeTopic({ choice: choice.name }));
    }
  }

  saveInterests() {
    this.chose$.subscribe((chose) => {
      if (chose.length == 0) return;
      this.store.dispatch(chooseActions.saveInterests({ interests: chose }));
    });
  }
}
