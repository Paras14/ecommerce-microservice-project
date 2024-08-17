package com.practice.project.order_service.service;

import com.practice.project.order_service.client.InventoryClient;
import com.practice.project.order_service.dto.OrderRequest;
import com.practice.project.order_service.model.Order;
import com.practice.project.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    private final InventoryClient inventoryClient;

    public void placeOrder(OrderRequest orderRequest){

        var isStockAvailable =inventoryClient.isInStock(orderRequest.skuCode(), orderRequest.quantity());

        if(isStockAvailable){
            Order order = new Order();
            order.setOrderNumber(UUID.randomUUID().toString());
            order.setPrice(orderRequest.price());
            order.setSkuCode(orderRequest.skuCode());
            order.setQuantity(orderRequest.quantity());

            orderRepository.save(order);
        } else {
            throw new RuntimeException("Not enough stock for the sku code : " + orderRequest.skuCode() + " and quantity : "+ orderRequest.quantity()+".");
        }
    }

}
