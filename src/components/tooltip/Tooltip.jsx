import React, {useState} from 'react';
import './tooltip.scss';

const Tooltip = ({text, children}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({top: 0, left: 0});
	const length = text.length > 34;

	const showTooltip = (e) => {
		setIsVisible(true);
		setPosition({top: e.clientY + 20, left: e.clientX - 30});
	};
	const hideTooltip = () => setIsVisible(false);
	return (
		<div className="tooltip_wrapper">
			<div
				className="tooltip-trigger"
				onMouseEnter={showTooltip}
				onMouseLeave={hideTooltip}>
				{children}
			</div>
			{isVisible && length && (
				<div
					className="tooltip-text"
					style={{top: position.top, left: position.left}}>
					{text}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
