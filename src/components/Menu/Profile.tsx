import React from "react";

interface IntProfile{
    username: string,
    logo:string
}
export default class Profile extends React.Component<IntProfile> {
    constructor(props: any) {
        super(props);
      }
    render() {
        return (
            <div className="profile clearfix">
                <div className="profile_pic">
                    <img src={this.props.logo} alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                    <span>Welcome,</span>
                    <h2>{this.props.username}</h2>
                </div>
            </div>
        )
    }
}