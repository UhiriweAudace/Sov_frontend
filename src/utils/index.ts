export const debounce = (func: Function, ms: number) => {
	let timeOutId = 0;
	return function <T>(...args: T[]) {
		if (timeOutId) clearTimeout(timeOutId);
		timeOutId = setTimeout(() => {
			func(...args);
		}, ms) as any;
	};
};
