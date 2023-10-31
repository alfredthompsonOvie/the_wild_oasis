import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as  updateSettingApi} from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			toast.success("Setting successfull updated");

			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting }
}