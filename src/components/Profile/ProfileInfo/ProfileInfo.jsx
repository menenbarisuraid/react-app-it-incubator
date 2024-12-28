import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div className={classes.foot}>*/}
            {/*    <img src="https://i.guim.co.uk/img/media/9afb9dd3089f1390a0913ea246ea215f035bde5b/0_207_5472_3283/master/5472.jpg?width=1200&quality=85&auto=format&fit=max&s=dc37ee65ccb003fb5f4ef6ac5fe3a058" />*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;