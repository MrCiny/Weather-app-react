import "./styles.css";
import { Card } from "antd";
import weatherHelper from "./WeatherHelper";

import {
  CloudDownloadOutlined,
  CompassOutlined,
  SwapOutlined,
  CompressOutlined
} from "@ant-design/icons";

export default function CompToday(props) {
  const { data } = props;

  let iconSrc = "https://openweathermap.org/img/wn/" + data.icon + "@2x.png";
  return (
    <>
      <Card>
        <div className="today-layout-title">
          {data.weekday} {data.time}
        </div>
        <div className="today-layout-content">
          <div className="today-layout-content-part1">
            <div className="today-layout-content-part1-city">
              {data.city} ({data.country}), {data.iconTooltip}
            </div>
            <div className="today-layout-content-part1-img">
              <img
                src={weatherHelper.getIconUrl(data.icon, 4)}
                alt="Nav bildes"
                title={data.iconTooltip}
              />
              <div className="today-layout-content-part1-temp">
                {data.temperature}°C
              </div>
            </div>
          </div>
          <div className="today-layout-content-part2">
            <div className="today-layout-content-part2-feels">
              Pēc sajūtām {data.feels_like_temparature}°C
            </div>
            <div className="today-layout-content-part2-info">
              <div className="today-layout-content-part2-info-column">
                <div>
                  <CloudDownloadOutlined className="today-layout-content-part2-info-icon" />
                  <span className="today-layout-content-part2-info-text">
                    Nokrišņi
                  </span>
                </div>
                <div>
                  <span className="today-layout-content-part2-info-data">
                    {data.humidity} %
                  </span>
                </div>
              </div>
              <div className="today-layout-content-part2-info-column">
                <div>
                  <CompassOutlined className="today-layout-content-part2-info-icon" />
                  <span className="today-layout-content-part2-info-text">
                    Vēja virziens
                  </span>
                </div>
                <div>
                  <span className="today-layout-content-part2-info-data">
                    {data.windDirection}
                  </span>
                </div>
              </div>
              <div className="today-layout-content-part2-info-column">
                <div>
                  <SwapOutlined className="today-layout-content-part2-info-icon" />
                  <span className="today-layout-content-part2-info-text">
                    Vēja ātrums
                  </span>
                </div>
                <div>
                  <span className="today-layout-content-part2-info-data">
                    {data.windSpeed} m/s
                  </span>
                </div>
              </div>
              <div className="today-layout-content-part2-info-column">
                <div>
                  <CompressOutlined className="today-layout-content-part2-info-icon" />
                  <span className="today-layout-content-part2-info-text">
                    Atmosfēras spiediens
                  </span>
                </div>
                <div>
                  <span className="today-layout-content-part2-info-data">
                    {data.pressure} hPa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          {data.hours && data.hours.length > 0 && (
            <div className="hours-layout-content">
              {data.hours.map((item, index) => {
                if (index > 5) return false;
                return (
                  <Card key={index} size="small" bordered="false">
                    <div>{item.name}</div>
                    <div className="hours-layout-content-img-row">
                      <img
                        src={weatherHelper.getIconUrl(item.icon, 2)}
                        alt="Nav bildes"
                        title={item.iconTooltip}
                        width="50px"
                        height="50px"
                      />
                      <div>{item.temperature}°C</div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      </Card>
      <></>
    </>
  );
}
