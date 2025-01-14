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
                <label className="font-medium" htmlFor="">
                  NOMBRE
                </label>
                {isEditing ? (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={profile.user.name}
                    type="text"
                  />
                ) : (
                  <div>{profile.user.name}</div>
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium" htmlFor="">
                  CORREO ELECTRONICO
                </label>
                <div>{profile.user.email}</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <label className="font-medium" htmlFor="">
                  DIRECCIÓN
                </label>
                <div>{profile.user.address}</div>
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium" htmlFor="">
                  TELEFONO
                </label>
                <div>{profile.user.telephone}</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-1 flex-col">
                <label className="font-medium" htmlFor="">
                  ROL
                </label>
                <div>{profile.user.role}</div>
              </div>
              <div className="flex flex-1 flex-col">
                <label className="font-medium" htmlFor="">
                  FECHA REGISTRO
                </label>
                <div>{formatDate(profile.user.registrationdate)}</div>
              </div>
            </div>
          </main>
          {isEditing ? (
            <IconX stroke={1.5} onClick={() => setIsEditing(false)} />
          ) : (
            <IconEdit stroke={1.5} onClick={() => setIsEditing(true)} />
          )}
        </section>
      </div>
    );
  }
};

export default Profile;
