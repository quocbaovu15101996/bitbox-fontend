import { FC } from 'react';
import CountdownTime from 'assets/tournament/countdown.svg';
import CountdownTimeDay from 'assets/tournament/countdownday.svg';
import CountdownTimeDayMore100days from 'assets/tournament/countdownday2.png';
import Countdown from 'react-countdown';

interface CountDownTimeParam {
  time: number;
  showDay?: boolean;
  showContent?: boolean;
  marginTop?: boolean | true;
}

const CountDownTime: FC<CountDownTimeParam> = (props: CountDownTimeParam) => {
  // useEffect(() => {
  //   console.log(props);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props]);

  const renderCountdown = (days: number, hours: number, minutes: number, seconds: number, completed: boolean) => {
    if (completed) {
      // Render a completed state
      return <></>;
    } else {
      // Render a countdown
      return (
        <div
          className={`countdown relative ${days.toString().length === 3 ? 'three_day' : ''} ${
            props.marginTop ? 'mb-5' : ''
          } ${props.showDay ? 'day' : ''}`}
        >
          {props.showDay && days.toString().length === 3 ? (
            <img src={CountdownTimeDayMore100days} alt="" className="w-full" />
          ) : props.showDay ? (
            <img src={CountdownTimeDay} alt="" className="w-full" />
          ) : (
            <img src={CountdownTime} alt="" className="w-full" />
          )}
          <div className="countdown-time absolute flex items-center justify-center top-0 w-full h-full">
            {props.showDay && (
              <div
                className={`countdown-time__item ${
                  days.toString().length === 3 ? 'w-full' : ''
                } flex flex-col items-center justify-end font-bold text-white`}
              >
                {days.toString().length === 3 ? (
                  <div className="flex items-center justify-center h-full font-bold text-white">
                    <span className="countdown-time__item-value">{days.toString()[0]}</span>
                    <span className="countdown-time__item-value mr-1">{days.toString()[1]}</span>
                    <span className="countdown-time__item-value">{days.toString()[2]}</span>
                  </div>
                ) : days.toString().length === 2 ? (
                  <div className="flex items-center justify-center h-full font-bold text-white">
                    <span className="countdown-time__item-value">{days.toString()[0]}</span>
                    <span className="countdown-time__item-value">{days.toString()[1]}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full font-bold text-white">
                    <span className="countdown-time__item-value">0</span>
                    <span className="countdown-time__item-value">{days.toString()[0]}</span>
                  </div>
                )}
                <div
                  className={`countdown-time__item-content font-normal ${
                    !props.showContent ? 'opacity-0' : 'opacity-70'
                  }`}
                >
                  Day
                </div>
              </div>
            )}

            <div className="countdown-time__item flex flex-col items-center justify-end font-bold text-white">
              {hours.toString().length >= 2 ? (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">{hours.toString()[0]}</span>
                  <span className="countdown-time__item-value">{hours.toString()[1]}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">0</span>
                  <span className="countdown-time__item-value">{hours.toString()[0]}</span>
                </div>
              )}
              <div
                className={`countdown-time__item-content font-normal ${
                  !props.showContent ? 'opacity-0' : 'opacity-70'
                }`}
              >
                Hour
              </div>
            </div>
            <div className="countdown-time__item flex flex-col items-center justify-end font-bold text-white">
              {minutes.toString().length >= 2 ? (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">{minutes.toString()[0]}</span>
                  <span className="countdown-time__item-value">{minutes.toString()[1]}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">0</span>
                  <span className="countdown-time__item-value">{minutes.toString()[0]}</span>
                </div>
              )}
              <div
                className={`countdown-time__item-content font-normal ${
                  !props.showContent ? 'opacity-0' : 'opacity-70'
                }`}
              >
                Minute
              </div>
            </div>
            <div className="countdown-time__item flex flex-col items-center justify-end font-bold text-white">
              {seconds.toString().length >= 2 ? (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">{seconds.toString()[0]}</span>
                  <span className="countdown-time__item-value">{seconds.toString()[1]}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full font-bold text-white">
                  <span className="countdown-time__item-value">0</span>
                  <span className="countdown-time__item-value">{seconds.toString()[0]}</span>
                </div>
              )}
              <div
                className={`countdown-time__item-content font-normal ${
                  !props.showContent ? 'opacity-0' : 'opacity-70'
                }`}
              >
                Second
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={props.time}
      renderer={prop => renderCountdown(prop.days, prop.hours, prop.minutes, prop.seconds, prop.completed)}
    />
  );
};

export default CountDownTime;
