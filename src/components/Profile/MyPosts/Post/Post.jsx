import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
            {props.message}
            <div>
            <span>like</span> {props.like}
            </div>
        </div>
    )  
}

export default Post;