import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      const { data } = await supabase
        .from("favorites")
        .select("group_id")
        .eq("user_id", user.id);

      setFavorites(data?.map((f: any) => f.group_id) || []);
      setLoading(false);
    };

    fetchFavorites();
  }, [user]);

  const toggleFavorite = useCallback(async (groupId: string) => {
    if (!user) return false;

    const isFav = favorites.includes(groupId);

    if (isFav) {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("group_id", groupId);

      if (!error) {
        setFavorites(prev => prev.filter(id => id !== groupId));
      }
      return false;
    } else {
      const { error } = await supabase
        .from("favorites")
        .insert({ user_id: user.id, group_id: groupId });

      if (!error) {
        setFavorites(prev => [...prev, groupId]);
      }
      return true;
    }
  }, [user, favorites]);

  const isFavorite = useCallback((groupId: string) => {
    return favorites.includes(groupId);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite, loading, isLoggedIn: !!user };
};
