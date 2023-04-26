import "./styles.css";

import { Card } from "antd";
import weatherHelper from "./WeatherHelper";

export default function CompWeek(props) {
  const { data } = props;
  return (
    <>
      {data.days && data.days.length > 0 && (
        <Card>
          <div className="week-layout-content">
            {data.days.map((item, index) => {
              return (
                <Card
                  key={index}
                  bordered={true}
                  size="small"
                  title={
                    <>
                      <div>{item.name}</div>
                      <div>{item.date}</div>
                    </>
                  }
                >
                  <div>Diena</div>
                  <div className="week-layout-content-img-row">
                    <img
                      src={weatherHelper.getIconUrl(item.max_icon, 2)}
                      alt="Nav bildes"
                      title={item.max_iconTooltip}
                      width="50px"
                      height="50px"
                    />
                    <div>{item.max_temp}°C</div>
                  </div>
                  <div>Nakts</div>
                  <div className="week-layout-content-img-row">
                    <img
                      src={weatherHelper.getIconUrl(item.min_icon, 2)}
                      alt="Nav bildes"
                      title={item.min_iconTooltip}
                      width="50px"
                      height="50px"
                    />
                    <div>{item.min_temp}°C</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      )}
    </>
  );
}
