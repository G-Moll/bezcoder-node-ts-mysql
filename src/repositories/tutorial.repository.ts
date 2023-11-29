import connection from '../db';
import Tutorial from '../models/tutorial.model';

interface ITutorialRepository {
    save( tutorial: Tutorial): Promise<Tutorial>;
    retrieveAll( searchParams: { title: string, published: boolean } ): Promise<Tutorial[]>;
    retrieveById( tutorialId: number ): Promise< Tutorial | undefined >;
    update( tutorial: Tutorial ): Promise<number>;
    delete( tutorialId: number ) Promise<number>;
    deleteAll(): Promise<number>
}

class TutorialRepository implements ITutorialRepository {
    save( tutorial: Tutorial ): Promise<Tutorial> {}
    retrieveAll( searchParams: { title?: string, published?: boolean } ): Promise<Tutorial[]> {}
    retrieveById( tutorialId: number ): Promise<Tutorial> {}
    update( tutorialId: number ): Promise<number> {}
    delete( tutorialId: number ): Promise<number> {}
    deleteAll(): Promise<number> {}
}
 export default new TutorialRepository();
