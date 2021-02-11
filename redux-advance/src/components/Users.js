import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userList } from '../redux/actions/userAction';

const Users = ({ userList, loading, users, error }) => {
	useEffect(() => {
		userList();
	}, [userList]);

	return (
		<div>
			<h4>Users</h4>
            
			{loading ? (
				<h3> Loading... </h3>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<div>{users.map((user) => <li key={user.id}>{user.name}</li>)}</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.userReducer.loading,
	users: state.userReducer.users,
	error: state.userReducer.error
});

export default connect(mapStateToProps, { userList })(Users);
