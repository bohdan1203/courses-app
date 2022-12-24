export function getAuthorsNames(authorsIdList, authorsList) {
	return authorsIdList.map((authorId) => {
		return authorsList.find((author) => author.id === authorId).name;
	});
}
