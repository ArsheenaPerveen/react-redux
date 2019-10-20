import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';
export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUser(id)));
}
export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get('/posts')
        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }
}
export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`)
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
}