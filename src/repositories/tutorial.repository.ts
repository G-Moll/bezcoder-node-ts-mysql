import { OkPacket } from 'mysql2';
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
    save( tutorial: Tutorial ): Promise<Tutorial> {
        return new Promise( (resolve, reject ) => {
            connection.query<OkPacket>(
                "INSERT INTO tutorials( title, description, published ) VALUES(?, ?, ?)",
                [ tutorial.title, tutorial.description, tutorial.published ? tutorial.published : false ],
                ( err, res ) => {
                    if( err ) {
                        reject( err );
                    }
                    else {
                        this
                            .retrieveById( res.insertId)
                            .then( tutorial => resolve( tutorial ! ) )
                            .catch( reject )
                    }
                }
            );
        });
    }

    retrieveAll( searchParams: { title?: string, published?: boolean } ): Promise<Tutorial[]> {
        let query: string = "SELECT * FROM tutorials";
        let condition: string = "";

        if( searchParams?.title ) {
            condition += `LOWER( title ) LIKE '${ searchParams.title }'`;
        }

        if( condition.lenght ) {
            query += " WHERE " + condition;
        }

        return new Promise( ( resolve, reject ) => {
            connection.query<Tutorial[]>( query, ( err, res ) => {
                if( err ){
                    reject( err );
                }
                else {
                    resolve( res );
                }
            })
        });

    }

    retrieveById( tutorialId: number ): Promise<Tutorial> {

    }

    update( tutorialId: number ): Promise<number> {

    }

    delete( tutorialId: number ): Promise<number> {

    }

    deleteAll(): Promise<number> {

    }
}
 export default new TutorialRepository();
