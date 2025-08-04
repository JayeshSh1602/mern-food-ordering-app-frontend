import {
    useCreateMyRestaurant,
    useGetMyRestaurant,
    useUpdateMyRestaurant,
    // useGetMyRestaurantOrders,
} from "@/api/MyRestaurantApi";
// import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurant = () => {
    const { createRestaurant, isLoading: isCreateLoading } =
        useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } =
        useUpdateMyRestaurant();
    const isEditing = !!restaurant
    return (
        <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLoading} />
    )
}

export default ManageRestaurant
