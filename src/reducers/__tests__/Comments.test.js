import commentsReducer from '../../reducers/Comments';
import { SAVE_COMMENT } from '../../actions/types'; 

it('handles actions of type SAVE_COMMENT', ()=> {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'SDFASFSASFSA'});
    expect(newState).toEqual([]);
})