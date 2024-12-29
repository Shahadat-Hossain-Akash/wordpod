import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  createData,
  updateData,
  deleteData,
  shuffleData,
} from "@/controllers/controller";
import { useFetch } from "@/hooks/utils";

interface Word {
  id: string;
  word: string;
  description?: string;
  created_at?: string;
}

interface DataContextProps {
  data: Word[];
  isLoading: boolean;
  error: unknown;
  createWord: (word: Word) => void;
  updateWord: (id: string, word: string, description: string) => void;
  deleteWord: (id: string) => void;
  shuffleWord: () => void;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  isShuffledEnabled: boolean;
  setIsShuffleEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
}

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [isShuffledEnabled, setIsShuffleEnabled] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const { data, isLoading, error, refetch } = useFetch(
    selectedSort,
    isShuffledEnabled,
    searchParam,
  );

  const createMutation = useMutation({
    mutationFn: createData,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const createWord = (word: Word) => {
    createMutation.mutate(word);
  };

  const updateWord = (id: string, word: string, description: string) => {
    updateMutation.mutate({ id, word, description });
  };

  const deleteWord = (id: string) => {
    deleteMutation.mutate(id);
  };
  const shuffleWord = () => {
    return shuffleData();
  };

  return (
    <DataContext.Provider
      value={{
        data: data || [],
        isLoading,
        error,
        createWord,
        updateWord,
        deleteWord,
        shuffleWord,
        selectedSort,
        setSelectedSort,
        isShuffledEnabled,
        setIsShuffleEnabled,
        searchParam,
        setSearchParam,
        refetch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
