import React from "react";
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField/TextField";

import styles from "./DndList.module.scss";

const reorder = (list, startIndex, endIndex) => {
    const replacing = list.get(startIndex);
    const removed = list.splice(startIndex, 1);

    return removed.splice(endIndex, 0, replacing);
};

export const DndList = ({ items, onReorder, onChange }) => {

    const handlerClasses = classNames(
        "material-icons",
        styles['item__icon']
    );

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        const newItems = reorder(
            items,
            result.source.index,
            result.destination.index
        );
        onReorder(newItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.get('id')} draggableId={item.get('id')} index={index}>
                                {(provided, snapshot) => (
                                    <div className={styles['item__container']} ref={provided.innerRef} {...provided.draggableProps}>
                                        <i className={handlerClasses} {...provided.dragHandleProps}>drag_indicator</i>
                                        <TextField
                                            id={item.get('id')}
                                            label={`Название розетки №${item.get('id')}`}
                                            margin='normal'
                                            variant='outlined'
                                            value={item.get('name')}
                                            autoComplete='off'
                                            onChange={(e) => onChange(item.get('id'), e.target.value)}
                                            className={styles['item__textfield']}
                                            InputProps={{ classes: {notchedOutline: styles['item__textfield'],
                                                    root: styles['item__textfield']} }}
                                            InputLabelProps={{ classes: { root: styles['item__textfield'] }, shrink: true }}
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
