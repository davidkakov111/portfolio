# Step-by-step process to prepare a 3D character for the website
## 1. Capture your model:
Use a 3D scanner (Polycam, photos, or video) to create a mesh of your upper body.

## 2. Import into Blender:
Open the mesh in Blender Desktop.

## 3. Add Body + Head Bones and Bind:
In Object Mode → Shift + A → Armature → Single Bone.
Name it body, place it along the spine up to the base of the neck.
Enter Edit Mode, select the tip → press E to extrude upward → name this new bone head.
Back in Object Mode, select the mesh → Shift + select the armature → Ctrl + P → With Automatic Weights.

## 4. Weight Paint:
Paint the head red, body blue, with a smooth gradient on the neck.
Top menu → Weights → Normalize All to fix overlaps.

## 5. Improve Geometry:
Select mesh → Edit Mode (Tab) → press 2 (Edge Select).
Use Ctrl + R to add edge loops around the neck for smoother bending.

## 6. Test in Pose Mode:
Select the armature → switch to Pose Mode.
Rotate the head bone → head should turn smoothly, neck bends naturally, no gaps.
If cracks appear → refine weights or add more edge loops.
