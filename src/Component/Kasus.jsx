import React, { useState } from "react";
import { useSelector } from "react-redux";

const Kasus = () => {
  const kasus = useSelector((state) => state.dataSet.kasus[0]);
  const [tempat, setTempat] = useState(" ");
  const [jenis, setJenis] = useState(" ");
  const [tahun, setTahun] = useState(" ");

  const Datas = [];
  console.log(Datas);

  return (
    <div className="container-fluid">
      <div>
        <div className="d-flex justify-content-center">
          {kasus ? (
            <div>
              <div className="d-flex justify-content-center">
                <span>
                  <select
                    name="Kabupaten"
                    onChange={(e) => setTempat(e.target.value)}
                  >
                    <option value=" " selected>
                      Pilih Kabupaten/Kota
                    </option>
                    {kasus
                      .filter((value) => {
                        if (value.id % 2 === 0) {
                          return value;
                        }
                      })
                      .map((values) => (
                        <option value={values.kode_kabupaten_kota}>
                          {values.nama_kabupaten_kota}
                        </option>
                      ))}
                  </select>
                </span>
                <span>
                  <select
                    name="Jenis Kelamin"
                    onChange={(e) => setJenis(e.target.value)}
                  >
                    <option value=" " selected>
                      Jenis Kelamin
                    </option>
                    <option value="LAKI-LAKI">Laki-laki</option>
                    <option value="PEREMPUAN">Perempuan</option>
                  </select>
                </span>
                <span>
                  <select
                    name="Tahun"
                    onChange={(e) => setTahun(e.target.value)}
                  >
                    <option value=" " selected>
                      Tahun
                    </option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                  </select>
                </span>
              </div>
              <table className="border border-2 p-2">
                <tr>
                  <th className="border border-2 p-2">Jenis Kelamin</th>
                  <th className="border border-2 p-2">Jumlah Kasus</th>
                  <th className="border border-2 p-2">Kabupaten/Kota</th>
                  <th className="border border-2 p-2">Provinsi</th>
                  <th className="border border-2 p-2">Tahun</th>
                </tr>
                {kasus
                  .filter((value) => {
                    if (tempat === " ") {
                      return value;
                    } else if (value.kode_kabupaten_kota === parseInt(tempat)) {
                      return value, Datas.push(value);
                    }
                  })
                  .filter((value) => {
                    if (jenis === " ") {
                      return value;
                    } else if (value.jenis_kelamin === jenis) {
                      return value, Datas.push(value);
                    }
                  })
                  .filter((value) => {
                    if (tahun === " ") {
                      return value;
                    } else if (value.tahun === parseInt(tahun)) {
                      return value, Datas.push(value);
                    }
                  })
                  .map((value) => (
                    <tr className="border border-2 p-2">
                      <td className="border border-2 p-2">
                        {value.jenis_kelamin}
                      </td>
                      <td className="border border-2 p-2">
                        {value.jumlah_kasus}
                      </td>
                      <td className="border border-2 p-2">
                        {value.nama_kabupaten_kota}
                      </td>
                      <td className="border border-2 p-2">
                        {value.nama_provinsi}
                      </td>
                      <td className="border border-2 p-2">{value.tahun}</td>
                    </tr>
                  ))}
              </table>
            </div>
          ) : (
            <div>
              <h1>Loading ...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Kasus;
