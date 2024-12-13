---
sidebar_label: 'Setup'
title: 'Initial Setup'
sidebar_position: 1
---

## Importing the `.RBXM` File

1. Right-click the **Workspace** in Roblox Studio.
2. Click **Insert from File** and select the `.RBXM` file.
3. Ungroup everything in the folder as prompted.

![A descriptive alt text](./gif-1.gif)

---

## Adding Buses to the Basic Spawner

This spawner supports basic spawning, meaning you must have a model for each bus number you intend to use.

### Steps to Add Buses

1. **Move the Bus Model:**
   - Duplicate the desired bus model.
   - Move it into the `Buses` folder within `ServerStorage`.
   - Rename the model to the bus number of your choice.

2. **Configure the Bus Category:**
   - Navigate to `ReplicatedStorage -> Spawner -> Categories`.
   - Select a category. If you haven't set up your categories yet, use `Category1`.
   - Copy the `EXAMPLE` configuration instance and paste it into your desired category.

3. **Rename and Edit Attributes:**
   - Rename the configuration instance to match your bus name.
   - Check and edit the **Attributes** in the **Properties** tab.

![A descriptive alt text](./gif-2.gif)

---

## Attributes Overview

Below is a table explaining the key attributes for bus configurations:

| Name           | Type       | Description                                                                                      |
|----------------|------------|--------------------------------------------------------------------------------------------------|
| `AssignedDriver` | `String`   | The Roblox User ID of the player assigned to the bus.                                           |
| `Available`      | `BoolValue`| Indicates if the bus is available. Automatically managed; do not modify manually.               |
| `CurrentDriver`  | `String`   | Tracks the current driver of the bus. Automatically managed; do not modify manually.            |
| `Description`    | `String`   | Not currently used but will be added in a future update.                                        |
| `Image`          | `Number`   | The Asset ID of the image for the bus.                                                          |
| `ModelName`      | `String`   | The name of your bus model (e.g., `2025 IC CE`).                                                |
| `Servicing`      | `BoolValue`| Indicates if the bus is in service. If `false`, it will not appear in the spawner.               |
| `Type`           | `String`   | The type of bus (e.g., `SPARE`, `Type FE`). Defaults to `STANDARD` if left blank.               |

---

:::note
Still need support? Join our [Discord Server](https://discord.gg/5k85S4KWSR) for help!.
:::