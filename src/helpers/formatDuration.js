export function formatDuration(duration) {
	return [
		Math.trunc(duration / 60) < 10 ? '0' : '',
		Math.trunc(duration / 60),
		':',
		duration % 60 < 10 ? '0' : '',
		duration % 60,
	].join('');
}
