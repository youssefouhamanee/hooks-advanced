import { useEffect, useRef } from "react";
export const useEffechtOnce = (cb) => {
	const shouldRun = useRef(false);
	useEffect(() => {
		if (!shouldRun.current) {
			cb();
			shouldRun.current = true;
		}
	});
};
