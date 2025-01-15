import React, { useEffect, useState } from "react";
import apiClient from "../API/axiosConfig";
import { IconEdit, IconX } from "@tabler/icons-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    user: {
      name: "",
      email: "",
      address: "",
      telephone: "",
      role: "",
      registrationdate: "",
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await apiClient.get(
          "http://localhost:5000/api/users/profile"
        );
        setProfile(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProfile();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  };

  if (!isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <section className="flex bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <main className="w-full space-y-6">
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  NOMBRE
                </label>
                {isEditing ? (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={profile.user.name}
                    type="text"
                    onChange={(e) =>
                      setProfile((prevProfile) => ({
                        user: { ...prevProfile.user, name: e.target.value },
                      }))
                    }
                  />
                ) : (
                  <div className="py-2 px-4">{profile.user.name}</div>
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  CORREO ELECTRONICO
                </label>
                {isEditing ? (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={profile.user.email}
                    type="email"
                  />
                ) : (
                  <div className="py-2 px-4">{profile.user.email}</div>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  DIRECCIÓN
                </label>
                {isEditing ? (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={profile.user.address}
                    type="text"
                  />
                ) : (
                  <div className="py-2 px-4">{profile.user.address}</div>
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  TELEFONO
                </label>
                {isEditing ? (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={profile.user.telephone}
                    type="text"
                  />
                ) : (
                  <div className="py-2 px-4">{profile.user.telephone}</div>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  ROL
                </label>
                <div className="py-2 px-4">{profile.user.role}</div>
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium py-2 px-4" htmlFor="">
                  FECHA REGISTRO
                </label>
                <div className="py-2 px-4">
                  {formatDate(profile.user.registrationdate)}
                </div>
              </div>
            </div>
            {isEditing ? (
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Guardar
              </button>
            ) : null}
          </main>
          {isEditing ? (
            <IconX
              className="cursor-pointer"
              stroke={1.5}
              onClick={() => setIsEditing(false)}
            />
          ) : (
            <IconEdit
              className="cursor-pointer"
              stroke={1.5}
              onClick={() => setIsEditing(true)}
            />
          )}
        </section>
      </div>
    );
  }
};

export default Profile;
