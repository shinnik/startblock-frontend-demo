import React, { useState } from "react";
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField/TextField";
import { withStyles } from "@material-ui/core/styles";

import styles from "../DndList/DndList.module.scss";

const StyledTextField = withStyles

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const DndList = () => {
    const state = {
        items: [
            {
                id: '1',
                content: 'Кухня'
            },
            {
                id: '2',
                content: 'Комната'
            },
            {
                id: '3',
                content: 'Туалет'
            }]
    };

    const handlerClasses = classNames(
        "material-icons",
        styles['item__icon']
    )

    const [itemsState, setItems] = useState(state);

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            itemsState.items,
            result.source.index,
            result.destination.index
        );
        setItems({
            items
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {itemsState.items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div className={styles['item__container']} ref={provided.innerRef} {...provided.draggableProps}>
                                        <i className={handlerClasses} {...provided.dragHandleProps}>drag_indicator</i>
                                        <TextField
                                            id={item.id}
                                            label={`Название розетки №${index + 1}`}
                                            margin='normal'
                                            variant='outlined'
                                            value={item.content}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            className={styles['item__textfield']}
                                            InputProps={{ classes: {notchedOutline: styles['item__textfield'],
                                                    root: styles['item__textfield']} }}
                                            InputLabelProps={{ classes: { root: styles['item__textfield'] } }}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
