import {save, update, remove, removeAll, getUser, getAllUser} from './controller.js'


const router = (app) =>{
    app.post('/save-student',save);
    app.post('/update',update);
    app.post('/remove-user', remove);
    app.post('/remove-all-user', removeAll);
    app.get('/user',getUser);
    app.get('/members',getAllUser);
}


export default router;