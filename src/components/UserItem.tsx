import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div style={{ padding: 15, border: "1px solid black" }}>
			{user.id}. {user.name} in city {user.address.city} on street {user.address.street}
		</div>
	);
};

export default UserItem;
